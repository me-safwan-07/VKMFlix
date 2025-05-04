import { SignIn, SignUp } from "@clerk/clerk-react";

const Auth = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <SignIn
          path="/sign-in" 
          routing="path" 
          signUpUrl="/sign-up" 
        />
        <SignUp 
          path="/sign-up" 
          routing="path" 
          signInUrl="/sign-in" 
        />
      </div>
    </div>
  );
};

export default Auth;