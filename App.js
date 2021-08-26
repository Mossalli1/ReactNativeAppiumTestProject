// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

import React, {Component} from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      isLogined: false,
    };
  }

  inputChangeHandler = (value, name) => {
    this.setState({
      [name]: value,
    });
  };

  login = () => {
    if (
      this.state.username == 'codemagic' &&
      this.state.password == 'nevercode'
    ) {
      this.setState({isLogined: true});
    } else {
      this.setState({isLogined: false});
    }
  };

  render() {
    return (
      <View
        style={LOCAL_STYLES.wrapper}
        testID="app-root"
        accessibilityLabel="app-root">
        <View style={LOCAL_STYLES.inputContainer}>
          <TextInput
            name="username"
            accessibilityLabel="username"
            style={LOCAL_STYLES.input}
            onChangeText={text => this.inputChangeHandler(text, 'username')}
          />
        </View>

        <View style={LOCAL_STYLES.inputContainer}>
          <TextInput
            name="password"
            accessibilityLabel="password"
            secureTextEntry={true}
            style={LOCAL_STYLES.input}
            onChangeText={text => this.inputChangeHandler(text, 'password')}
          />
        </View>

        <Text accessibilityLabel="loginstatus">
          {this.state.isLogined ? 'success' : 'fail'}
        </Text>

        <TouchableHighlight
          style={LOCAL_STYLES.buttonContainer}
          accessibilityLabel="login"
          onPress={this.login}>
          <Text style={{color: 'white'}}>Login</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const LOCAL_STYLES = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputContainer: {
    borderBottomColor: '#AFAFAF',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderBottomWidth: 1,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    borderColor: 'blue',
    borderWidth: 1,
  },
  buttonContainer: {
    height: 45,
    width: 250,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: '#00b5ec',
  },
});
