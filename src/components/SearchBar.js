import React from 'react'

//Display search bar: Text input
class SearchBar extends React.Component {
    state = { term: '' }

    OnFormSubmit = (event) => {
        event.preventDefault()
        //Passing search term to App Comp
        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div className='ui segment'>
                <form onSubmit={this.OnFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>Image Search</label>
                        <input 
                            type='text'
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })} 
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar