import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { ARKit } from 'react-native-arkit';
export default class Test extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ARKit
          style={{ flex: 1 }}
          
        >
          <ARKit.Text
            text="Park Avenue"
            position={{ x: -12, y: 2,  z: -5}}
            font={{ size: 0.5, depth: 0.15 }}
            eulerAngles={{
                y: Math.PI / 2.1,
              }}
   
          />
        
        <ARKit.Text
            text="Strawberry Street"
            position={{ x: -.5, y: 1, z: -5}}
            font={{ size: 0.5, depth: 0.15, rotate: 5, }}
          />
        </ARKit>
      </View>
    );
  }
}
AppRegistry.registerComponent('Augma', () => Test);
