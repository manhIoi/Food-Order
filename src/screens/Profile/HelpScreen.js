import React, {useState} from 'react';
import {View, Text} from 'react-native';
import HelpForm from '../../components/Help/HelpForm';
import HelpHeader from '../../components/Help/HelpHeader';

function HelpScreen() {
  const [text, setText] = useState('');

  const handleOnSubmitForm = message => {
    console.log(message);
    if (message) {
      alert(
        'Cảm ơn bạn đã báo cáo đến dịch vụ, chúng tôi sẽ kiểm tra sớm nhất có thể ^_^',
      );
    }
    setText('');
  };

  return (
    <View style={{marginTop: 20, marginHorizontal: 15}}>
      <HelpHeader
        title="Ffood"
        content={`Chúng tôi là công ty công nghệ ẩm thực (food tech), phát triển hệ sinh thái về ảm thực với những đồng nghiệp xuất sắc, tự tin và chủ động ${'\n \n'}Với các chương trình giảm giá hấp dẫn cùng nhiều món ngon từ nhà hàng chất lượng trên ứng dụng, Ffood đem lại cho bạn những bữa ăn ngon miệng và tiện lợi cùng bạn bè và người thân`}
      />
      <HelpForm
        text={text}
        setText={setText}
        handleOnSubmitForm={handleOnSubmitForm}
      />
    </View>
  );
}

export default HelpScreen;
