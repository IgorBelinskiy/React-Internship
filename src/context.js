import React, { Component } from 'react';

const SwitchContext = React.createContext();

class SwitchDayNightProvider extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    isDay: false
  };

  toggleState = () => {
    this.setState(({ isDay }) => ({ isDay: !isDay }));
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;
    return (
      <SwitchContext.Provider value={{ ...this.state, toggleState: this.toggleState }}>
        {children}
      </SwitchContext.Provider>
    );
  }
}

const SwitchConsumer = SwitchContext.Consumer;

export { SwitchDayNightProvider, SwitchConsumer };
