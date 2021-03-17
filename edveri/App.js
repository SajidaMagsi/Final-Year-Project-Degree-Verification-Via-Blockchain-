import React, { useState } from 'react';
import { Appbar } from 'react-native-paper';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
} from 'react-native';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
import { WebView } from 'react-native-webview';

const ActivityIndicatorElement = () => {
  return (
    <View style={styles.activityIndicatorStyle}>
      <ActivityIndicator color='#ffc229' size='large' />
    </View>
  );
};

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Appbar.Header style={{ backgroundColor: '#ffc229' }}>
        <Appbar.Content
          title='Document Verification System'
          subtitle={'Design By: Edveri'}
        />
        <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
      </Appbar.Header>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <WebView
            style={{ flex: 1 }}
            onLoadStart={() => setVisible(true)}
            //Loading URL
            source={{ uri: 'http://edveri-client-app.surge.sh/' }}
            //Enable Javascript support
            javaScriptEnabled={true}
            //For the Cache
            domStorageEnabled={true}
            onLoad={() => setVisible(false)}
          />
          {visible ? <ActivityIndicatorElement /> : null}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#343a40',
    flex: 1,
  },
  activityIndicatorStyle: {
    flex: 1,
    backgroundColor: '#343a40',
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
});
export default App;
