import React from 'react';
import Pagination from './Pagination.jsx';
import User from './User.jsx';

// state
// page number +
// usersCount -
//

class UsersList extends React.Component {
	state = {
		currentPage: 1,
	};

	goNext = () => {
		this.setState({
			currentPage: this.state.currentPage + 1,
		});
	};
	goPrev = () => {
		this.setState({
			currentPage: this.state.currentPage - 1,
		});
	};

	render() {
		const users = this.props.users;
		const usersPerPage = 3;
		const { currentPage } = this.state;

		const startIndex = (currentPage - 1) * usersPerPage; // 0 3 6 9 12
		const endIndex = startIndex + usersPerPage;
		const usersToDisplay = users.slice(startIndex, endIndex);

		// input: usersPerPage, currentPage
		// output: users[]

		return (
			<div>
				<Pagination
					goNext={this.goNext}
					goPrev={this.goPrev}
					currentPage={currentPage}
					totalItems={users.length}
				/>
				<ul className="users">
					{usersToDisplay.map(({ id, name, age }) => (
						<User key={id} name={name} age={age} />
					))}
				</ul>
			</div>
		);
	}
}

export default UsersList;
