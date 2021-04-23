import React from 'react';
import {View, Text} from 'react-native';
import stylesCard from './styles';

function MessageCard() {
  return (
    <View style={stylesCard.messageCard}>
      <View style={stylesCard.messageCardTitle}>
        <Text style={stylesCard.messageCardTitleText}>Đơn hàng của bạn</Text>
      </View>
      <View style={stylesCard.messageCardContent}>
        <Text numberOfLines={6} style={stylesCard.messageCardContentText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
          veritatis. Facilis sit dolorum reiciendis? Necessitatibus repellat
          fuga sapiente, in ut culpa. Rerum atque ipsa facere velit quia
          incidunt dolor quibusdam? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eius quaerat reiciendis ex totam nam excepturi
          pariatur, amet mollitia quo tenetur quos incidunt architecto qui autem
          dolore atque! Quod, id officia!
        </Text>
      </View>
      <View style={stylesCard.messageCardFooter}>
        <Text style={stylesCard.messageCardFooterText}>21:27 24/04/2021</Text>
      </View>
    </View>
  );
}

export default MessageCard;
