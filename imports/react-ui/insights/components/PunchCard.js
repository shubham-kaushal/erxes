import React from 'react';
import PropTypes from 'prop-types';
import D3PunchCard from 'd3-punchcard';

const propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number,
};

class PunchCard extends React.Component {
  componentDidMount() {
    this.renderPunchCard('init');
  }

  componentDidUpdate() {
    this.renderPunchCard('update');
  }

  renderPunchCard(type) {
    const { data, width } = this.props;

    let chart;
    if (type === 'init') {
      chart = D3PunchCard({ target: '#punch-card', width });
      this.chart = chart;
    } else {
      chart = this.chart;
    }

    chart.render(data);
  }

  render() {
    return <div id="punch-card" className="chart-wrapper" />;
  }
}

PunchCard.propTypes = propTypes;

export default PunchCard;
