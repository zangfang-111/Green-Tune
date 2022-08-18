import { useState } from 'react';

import images from '../../assets';
import SearchInput from '../common/SearchInput';
import GtPopover from '../common/Popover';

const SettingsMenu = () => (
  <div className='settings-menu'>
    <h3>Settings</h3>
    <div className='menu-cover'>
      <span>Sign Up/Log In</span>
      <span>Orders</span>
      <span>Help</span>
    </div>
  </div>
);

function LandingHeader() {
  const [searchValue, setValue] = useState('');
  const [isSettingPopOpen, setIsOpen] = useState(false);

  function onChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className='ld-layout__header'>
      <a href='/' className='ld-layout__header-link'>
        <p>GreenTune</p>
        <img src={images.GreenTuneLogo} alt='Logo - Green Tune' />
      </a>
      <div className='ld-layout__header-search'>
        <SearchInput value={searchValue} onChange={onChange} />
        <h1>Your health deserves this one</h1>
      </div>
      <div className='ld-layout__header-setting'>
        <GtPopover
          isOpen={isSettingPopOpen}
          setIsOpen={setIsOpen}
          Container={SettingsMenu}
        >
          <span
            className='setting-icon'
            onClick={() => setIsOpen(!isSettingPopOpen)}
          >
            <img src={images.SettingsIcon} alt='Settings - Green Tune' />
          </span>
        </GtPopover>
        <span className='cart-icon'>
          <img src={images.CartIcon} alt='Cart - Green Tune' />
        </span>
      </div>
    </div>
  );
}

export default LandingHeader;
