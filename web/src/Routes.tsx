import { Router, Route, Set } from '@redwoodjs/router'

import AuthLayout from 'src/layouts/AuthLayout'
import BackLayout from 'src/layouts/BackLayout'
import { useAuth } from 'src/lib/auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route notfound page={NotFoundPage} />
      <Set wrap={[AuthLayout]}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
        <Set wrap={[BackLayout]}>
          <Route path="/unauthenticated-exception" page={UnauthenticatedExceptionPage} name="unauthenticatedException" />
          <Set private unauthenticated="login">
            <Route path="/function-exception" page={FunctionExceptionPage} name="functionException" />
            <Route path="/service-exception" page={ServiceExceptionPage} name="serviceException" />
            <Route path="/users" page={UsersPage} name="users" />
          </Set>
        </Set>
      </Set>
    </Router>
  )
}

export default Routes
