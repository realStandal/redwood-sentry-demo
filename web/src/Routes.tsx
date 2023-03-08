import { Router, Route, Set } from '@redwoodjs/router'

import AuthLayout from 'src/layouts/AuthLayout'
import { useAuth } from 'src/lib/auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route notfound page={NotFoundPage} />
      <Set wrap={[AuthLayout]}>
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
        <Set private unauthenticated="login">
          <Route path="/" page={HomePage} name="home" />
        </Set>
      </Set>
    </Router>
  )
}

export default Routes
