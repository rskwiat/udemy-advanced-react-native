import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Card, Icon, Button } from 'react-native-elements';
import * as actions from '../actions';
import Swipe from '../components/swipe';

class DeckScreen extends Component {

  static navigationOptions = {
    tabBarLabel: 'Jobs',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name='work'
        color={tintColor}
        size={24}
      />
    )
  };

  renderNoMoreCards = () => {
    return (
      <Card title="No More Cards">
        <Button
          title="Back to Map"
          large
          icon={{ name: 'my-location' }}
          backgroundColor="#03A9F4"
          onPress={() => this.props.navigation.navigate('map')}
        />
      </Card>
    );
  }

  renderCard(job) {
    const initialRegion = {
      longitude: job.longitude,
      latitude: job.latitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02
    };


    return (
      <Card title={job.jobtitle}>
        <View style={{ height: 300, marginBottom: 20 }}>
          <MapView
            scrollEnabled={false}
            style={{ flex: 1 }}
            cacheEnabled={Platform.OS === 'android'}
            initialRegion={initialRegion}
          />
        </View>
        <View style={styles.detailWrapper}>
          <Text>{job.company}</Text>
          <Text>{job.formattedRelativeTime}</Text>
        </View>
        <Text>
          {job.snippet.replace(/<b>/g, '').replace(/<\/b>/g, '')}
        </Text>
      </Card>
    );
  }

  render() {
    return (
      <View style={{ marginTop: 10 }}>
        <Swipe
          keyProp="jobkey"
          data={this.props.jobs}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          onSwipeRight={job => this.props.likeJob(job)}
        />
      </View>
    );
  }
}

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
};

function mapStatetoProps({ jobs }) {
  return {
    jobs: jobs.results
  };
}

export default connect(mapStatetoProps, actions)(DeckScreen);
