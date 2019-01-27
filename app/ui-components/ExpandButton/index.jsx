import React from 'react'
import { Card, Row } from 'antd'
import PropTypes from 'prop-types'
import Icon from 'react-fa'
import './style.scss'

class ExpandButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: this.props.expanded,
    }
  }

  handleClick = () => {
    this.setState(
      {
        expanded: !this.state.expanded,
      },
      () => {
        this.props.onToggle(this.state.expanded)
      },
    )
  }

  render() {
    const { expanded } = this.state

    return (
      <div
        className={`expand-button noselect ${expanded ? 'expanded' : 'collapsed'}`}
        onClick={this.handleClick}
      >
        <Icon
          className="list-item-icon space-right--5"
          name={expanded ? 'chevron-up' : 'chevron-down'}
        />
        {expanded ? this.props.expandedText : this.props.collapsedText}
      </div>
    )
  }
}

ExpandButton.propTypes = {
  expanded: PropTypes.bool,
  expandedText: PropTypes.string,
  collapsedText: PropTypes.string,
  onToggle: PropTypes.func,
}

ExpandButton.defaultProps = {
  expanded: false,
  expandedText: 'Show less',
  collapsedText: 'Show more',
  onToggle: () => {},
}

export default ExpandButton
