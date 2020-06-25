import React, { Component } from 'react'
import config from '../config'
import './EditBookmark.css'

class EditBookmark extends Component {
  static defaultProps = {
    onEditBookmark: () => {}
  };

  state = {
    error: null,
  }

  handleSubmit = e => {
    e.preventDefault()
    
  }
}