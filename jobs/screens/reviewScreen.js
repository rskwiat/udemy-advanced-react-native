import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  Linking,
  Platform
} from 'react-native';
import { Button, Icon, Card } from 'react-native-elements';
import { MapView } from 'expo';
import { connect } from 'react-redux';

class ReviewScreen extends Component {
  //sets property on class not on instance
  static navigationOptions = ({ navigation }) => ({
    title: 'Reviews Jobs',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name='account-circle'
        color={tintColor}
        size={24}
      />
    ),
    headerRight: (
      <Button
        backgroundColor="rgba(0,0,0,0)"
        color="rgba(0,122,255,1)"
        title="Settings"
        onPress={() => navigation.navigate('settings')}
      />
    ),
    headerLeft: (
      <Button
        backgroundColor="rgba(0,0,0,0)"
        color="rgba(0,122,255,1)"
        title="Logout"
        onPress={() => navigation.navigate('welcome')}
      />
    )
  });

  renderLikedJobs() {
    return this.props.likedJobs.map(job => {
      const {
        company,
        formattedRelativeTime,
        url,
        jobkey,
        longitude,
        latitude,
        jobtitle
      } = job;

      const initialRegion = {
        longitude,
        latitude,
        latitudeDelta: 0.045,
        longitudeDelta: 0.02
      };

      return (
        <Card key={jobkey} title={jobtitle}>
          <View style={{ height: 200 }}>
            <MapView
              style={styles.mapStyle}
              cacheEnabled={Platform.OS === 'android'}
              scrollEnabled={false}
              initialRegion={initialRegion}
            />
            <View style={styles.detailWrapper}>
              <Text style={styles.italics}>{company}</Text>
              <Text style={styles.italics}>{formattedRelativeTime}</Text>
            </View>
            <Button
              title="Apply Now"
              backgroundColor="#03A9F4"
              onPress={() => Linking.openURL(url)}
            />
          </View>
        </Card>
      );
    });
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        {this.renderLikedJobs()}
      </ScrollView>
    );
  }
}

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    marginTop: 10
  },
  italics: {
    fontStyle: 'italic'
  },
  mapStyle: {
    flex: 1
  }
};

function mapStatetoProps(state) {
  return {
    likedJobs: state.likedJobs
  };
}

export default connect(mapStatetoProps)(ReviewScreen);
