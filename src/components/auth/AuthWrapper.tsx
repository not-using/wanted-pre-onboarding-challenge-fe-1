import LogoTitle from "components/.commons/LogoTitle";
import "assets/css/AuthPage.css";

interface authPageWrapperProps {
  children: React.ReactNode;
}

const AuthWrapper = ({ children }: authPageWrapperProps) => {
  return (
    <main className="auth-page__wrapper">
      <LogoTitle />
      <section className="auth-page__contents">{children}</section>
    </main>
  );
};

export default AuthWrapper;
