import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';

import React from 'react';

function PlaceholderBanner() {
  return (
    <Placeholder Animation={Fade}>
      <PlaceholderMedia
        style={{
          height: 200,
          width: '100%',
          borderRadius: 10,
          overflow: 'hidden',
          paddingHorizontal: 10,
          marginVertical: 10,
          marginTop: 8,
        }}
      />
    </Placeholder>
  );
}

export default PlaceholderBanner;
