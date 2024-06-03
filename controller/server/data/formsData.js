const formsData = [
  {
    "formId": "signUpForm",
    "fields": [
      {
        "type": "text",
        "label": "First Name:",
        "name": "firstName",
        "placeholder": "Enter your First Name"
      },
      {
        "type": "text",
        "label": "Last Name:",
        "name": "lastName",
        "placeholder": "Enter your Last Name"
      },
      {
        "type": "email",
        "label": "Email:",
        "name": "email",
        "placeholder": "Enter your Email"
      },
      {
        "type": "password",
        "label": "Password:",
        "name": "password",
        "placeholder": "Enter your Password"
      },
      {
        "type": "password",
        "label": "Confirm password:",
        "name": "repassword",
        "placeholder": "Confirm your Password"
      }
    ],
    "buttons": [
      {
        "type": "submit",
        "label": "Create Account"
      },
      {
        "type": "button",
        "label": "Login",
        "action": "navigate",
        "url": "./LogIn"
      }
    ],
    "text": "Already have an account?",
    "text1":"or",
    "socialMediaIcons": [
      {
        "iconName": "facebook",
        "iconText": "Sign up with Facebook",
        "iconTextUrl": "https://facebook.com"
      },
      {
        "iconName": "twitter",
        "iconText": "Sign up with Google",
        "iconTextUrl": "https://gmail.com"
      }
    ]
  },
  {
    "formId": "ContactUsForm",
    "fields": [
      {
        "type": "text",
        "label": "Full Name:",
        "name": "full name",
        "placeholder": "Enter your  FullName"
      },
      {
        "type": "email",
        "label": "Email:",
        "name": "email",
        "placeholder": "Enter your Email"
      },
      {
        "type": "textarea",
        "label": "Message:",
        "name": "message",
        "placeholder": "Enter your Message"
      }
    ],
    "buttons": [
      {
        "url":"./",
        "type": "submit",
        "label": "Send Message"
      }
    ]
  },
  {
    "formId": "LogInForm",
    "fields": [
      {
        "type": "username",
        "label": "Username:",
        "name": "user name",
        "placeholder": "Type your user username"
      },
      {
        "type": "password",
        "label": "Password:",
        "name": "password",
        "placeholder": "Type your user password"
      }],
    "textL":"Login",
    "text": "Forgot Password?",
    "button": "Sign in",
    "buttonUrl": "./",
    "text1": "----- or -----",
    "button1": "Sign in With Google",
    "buttonUrl1": "https://gmail.com",
    "text2": "New SoulMood?",
    "text3": "Create Account",
    "text3Url": "./SignUp"
    
   
  }
];

module.exports = formsData;
