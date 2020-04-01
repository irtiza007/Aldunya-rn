import React from 'react';
import { View } from 'react-native';
import Navigation from './src/Navigations/Navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configStore from './src/Store/store';
const { store, persistor } = configStore();
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
export default function App() {
  return (
    <ReactNativeZoomableView
      maxZoom={1.5}
      minZoom={1}
      zoomStep={0.5}
      initialZoom={1}
      bindToBorders={true}
      pinchToZoomInSensitivity={4}
      // zoomEnabled={false}
      // onZoomAfter={this.logOutZoomState}
      style={{
        padding: 0,
        backgroundColor: 'white',
      }}
    >
      <View style={{ flex: 1 }}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Navigation />
          </PersistGate>
        </Provider>
      </View>
    </ReactNativeZoomableView>
  )
}