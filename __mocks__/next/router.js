import React from 'react'

function getDisplayName(Component) {
  return Component.displayName || Component.name || 'Unknown'
}

export const withRouter = jest.fn(Component => {
  return class extends React.Component {
    static displayName = `withRouter(${getDisplayName(Component)})`

    render() {
      return (
        <Component
          router={{
            query: {},
            push: () => {},
          }}
          {...this.props}
        />
      )
    }
  }
})

const Router = {
  push: jest.fn(),
}

export default Router
