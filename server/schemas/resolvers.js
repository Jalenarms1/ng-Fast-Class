const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const {User, Classroom} = require('../models')

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true
})

const options = {
  use_filename: true,
  unique_filename: false,
  overwrite: true,
};


let resolvers = {
  Query: {
    testGet: () => {
      console.log('got')
      return {key: 'This is a test string'}
    }
    //for testing
    
    // user: async (parent, args, context) => {
    //   try {
    //     if (context.user) {
    //       const user = await User.findById(context.user._id).populate("orders");
  
    //       user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

    //       // if this query finds a business that belongs to the user then the business data will be returned with the user info
    //       const userBusiness = await Business.findOne({userId: context.user._id}).populate("orders").populate("products");

    //       return user;
    //     }

        
    //   } catch (error) {
    //     console.log(error);
    //     return error
    //   }

    // },
    
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create({
        ...args,
        
      });
      const token = signToken(user);

      return { token, user };
    },
    
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }
      
      throw new AuthenticationError('Not logged in');
    },
    
    login: async (parent, { username, password }) => {
      console.log(username);
      const user = await User.findOne({ username });
      console.log(user);
      console.log("hello")
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    
    deleteUser: async (parent, args, context) => {
      try {
        console.log("hit");
        let removedUser = await User.findByIdAndDelete(args._id);
        console.log(removedUser);


        //remove products that belong to that business
        // let removedProducts = await Product.deleteMany({userId: removedUser._id})

        // let delCart = await Cart.deleteMany({businessId: removedShop._id})

        return {msg: `user ${removedUser._id} has been removed`}

      } catch (error) {
        return error
      }
    },
    addClass: async (parent, {subject, courseName}, ctx) => {
      console.log(ctx);
 
      try {
        const newClass = await Classroom.create({
          subject,
          courseName,
          open: true,
          teacher: ctx.user._id
        })

        return newClass.populate('teacher')
      } catch (error) {
        console.log(error);
        return error
      }
    }
    
  }
};

module.exports = resolvers;
