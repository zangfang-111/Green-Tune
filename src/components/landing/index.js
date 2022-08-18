import LandingHeader from './LandingHeader';
import LandingFilter from './LandingFilter';
import LandingContents from './LandingContents';

function LandingLayout() {
  return (
    <div className='ld-layout'>
      <LandingHeader />
      <div className='ld-layout__body'>
        <LandingFilter />
        <LandingContents />
      </div>
    </div>
  );
}

export default LandingLayout;
