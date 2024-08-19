import React, { useEffect } from 'react';
import SectionTitle from '../global/SectionTitle';

function Linkedin() {  
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widgets.sociablekit.com/linkedin-profile-posts/widget.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col text-left max-w-md md:max-w-full w-full m-auto">
      <SectionTitle title="My Linkedin feed at a Glance" />
      <div className="sk-ww-linkedin-profile-post" data-embed-id="25451222"></div>
    </div>
  );
}

export default Linkedin;
