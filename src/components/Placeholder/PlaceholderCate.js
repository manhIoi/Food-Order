import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';

import React from 'react';

function PlaceholderCate() {
  return (
    <Placeholder Animation={Fade}>
      <PlaceholderMedia
        style={{
          width: '100%',
          height: 200,
          borderRadius: 10,
          marginHorizontal: 10,
          marginVertical: 4,
        }}
      />
    </Placeholder>
  );
}

export default PlaceholderCate;
