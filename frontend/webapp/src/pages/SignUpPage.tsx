import {SignUpForm} from "../components/Registration/SignUpForm";

export function SignUpPage() {
  return (
    <div style={{ padding: '20px' }}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white ">
    
        <SignUpForm />
      </div>
    </div>
  );
}

export default SignUpPage;
