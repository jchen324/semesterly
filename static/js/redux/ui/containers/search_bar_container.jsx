import { connect } from 'react-redux';
import { fetchSearchResults } from '../../actions/search_actions.jsx';
import { addOrRemoveCourse } from '../../actions/timetable_actions.jsx';
import { SearchBar } from '../search_bar.jsx';
import { fetchCourseInfo } from '../../actions/modal_actions.jsx'

const mapStateToProps = (state) => {
	let courseSections = state.courseSections.objects;
	return {
		semester: state.semester == "F" ? "Fall 2016" : "Winter 2017",
    	searchResults: state.searchResults.items,
    	isFetching: state.searchResults.isFetching,
    	isCourseInRoster: (course_id) => courseSections[course_id] !== undefined,
    	isSectionLocked: (course_id, section) => {
    		if (courseSections[course_id] === undefined) {
    			return false;
    		}
    		return Object.keys(courseSections[course_id]).some( 
    			(type) => courseSections[course_id][type] == section
			)
    	},
		hasHoveredResult: state.timetables.items[state.timetables.active].courses.some(course => course.fake)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	  	fetchCourses: (query) => dispatch(fetchSearchResults(query)),
	  	addCourse: addOrRemoveCourse,
		fetchCourseInfo: (id) => dispatch(fetchCourseInfo(id)), 
		hoverSearchResult: (position) => {
			dispatch({
				type: "HOVER_SEARCH_RESULT",
				position
			});
		}
	}
}

const SearchBarContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchBar);

export default SearchBarContainer;