import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* sky */}
      {/* Sun */}
      <View style={styles.sun} />
      
      {/* Clouds */}
      <Fontisto name="cloudy" size={40} color="#fff" style={styles.cloud1}/>
      <Fontisto name="cloudy" size={48} color="#fff" style={styles.cloud2}/>
      <Fontisto name="cloudy" size={48} color="#fff" style={styles.cloud3}/>
       {/* sky */}

      {/* AppBar/Header */}
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.outerCircle}>
            <View style={styles.innerCircle}>
              <AntDesign name="user" size={24} color="#fff" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
     {/* AppBar/Header */}

      {/* Main Content container */}
      <View style={styles.mainContent}>
        {/* showable container */}
        <View style={styles.overviewContainer}>
          <ImageBackground
            source={require('../../public/farmerbullimage.jpg')}
            style={styles.backgroundImage}
            resizeMode="cover"
          >
            {/* farmer access container start */}
            <View style={styles.textImageContainer}>
              <ImageBackground
                source={require('../../public/homeimage.png')}
                style={styles.homebackgroundImage}
                resizeMode="contain"
              />
              <Text style={styles.appNameText}>Farmer Access</Text>
            </View>
            {/* farmer access container end */}

            {/* Farmer Image Round Container */}
            <View style={styles.farmerImageContainer}>
              <View style={styles.farmerImage}>
                <ImageBackground
                  source={require('../../public/farmerImage.jpeg')}
                  style={styles.imageBackground}
                  resizeMode="cover"
                />
              </View>
            </View>
          </ImageBackground>
        </View>
        {/* showable container */}

        {/* value container */}
        <View style={styles.statsContainer}>
          <Text style={styles.statsText}>Crop Predictions</Text>
          <Text style={styles.statsValue}>85%</Text>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <AntDesign name="infocirlceo" size={20} color="#fff" />
            <Text style={styles.buttonText}>View Details</Text>
          </TouchableOpacity>
        </View>
        {/* value container */}

        {/* two button container */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={[styles.button, styles.modernButton]} onPress={() => {}}>
            <AntDesign name="warning" size={20} color="#fff" />
            <Text style={styles.buttonText}>Crop Problems</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.modernButton]} onPress={() => {}}>
            <AntDesign name="appstore-o" size={20} color="#fff" />
            <Text style={styles.buttonText}>Gonako</Text>
          </TouchableOpacity>
        </View>
        {/* two button container */}
        
      </View>

      {/* Bottom Buttons */}
      <View style={styles.bottomButtonsContainer}>
        <TouchableOpacity style={styles.circleButton} onPress={() => {}}>
          <AntDesign name="home" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circleButton} onPress={() => {}}>
          <AntDesign name="message1" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circleButton} onPress={() => {}}>
          <AntDesign name="camera" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circleButton} onPress={() => {}}>
          <Ionicons name="notifications-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circleButton} onPress={() => {}}>
          <AntDesign name="setting" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#193a3c',
    padding: 10,
  },
  sun: {
    position: 'absolute',
    top: 0, // Adjust to move it towards the top
    left: '65%',
    marginLeft: -40, // Adjust size accordingly
    width: 80,
    height: 80,
    backgroundColor: '#f4a465',
    borderRadius: 40,
    zIndex: 1,
  },
  cloud1: {
    position: 'absolute',
    top: '5%',
    left: '30%',
    zIndex: 1,
  },
  cloud2: {
    position: 'absolute',
    top: '7%',
    left: '70%',
    color: '#51a095',
    zIndex: 1,
  },
  cloud3: {
    position: 'absolute',
    top: '0%',
    left: '70%',
    color: '#f1a365',
    zIndex: -1,
  },
  appBar: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  outerCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f1a365',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#feeaca',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  overviewContainer: {
    flex: 2,
    borderRadius: 25,
    overflow: 'hidden',
    marginTop: 10,
    marginBottom: 20,
    position: 'relative', // Required for absolute positioning inside
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  textImageContainer: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: '#fdf0df',
    borderRadius: 20,
    position: 'absolute',
    top: -20, // Adjust to position half above
    left: '10%',
    zIndex: 1,
  },
  homebackgroundImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  appNameText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  farmerImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#f1a365',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  farmerImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  statsContainer: {
    backgroundColor: '#E6E6FA',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  statsText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
  statsValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  modernButton: {
    backgroundColor: '#1e90ff',
    borderColor: '#fff',
    borderWidth: 1,
  },
  buttonText: {
    color: '#fff',
    marginLeft: 5,
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  circleButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
