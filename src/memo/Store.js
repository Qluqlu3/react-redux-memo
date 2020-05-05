import { createStore } from 'redux';

const initData ={
	data: [
		{
			message: 'sample data',
			created: new Date()
		}
	],
	message: 'please type message',
	mode: 'default',
	fdata: []
};

export function memoReducer(state = initData, action) {
	switch(action.type) {
		case 'ADD':
			return addReduce(state, action);

		case 'DELETE':
			return deleteReduce(state, action);

		case 'FIND':
			return findReduce(state, action);

		default:
			return state;
	}
}

function addReduce(state, action) {
	let data = {
		message: action.message,
		created: new Date()
	};

	//新しい配列を生成するReduxの特性のため
	let newData = state.data.slice();
	newData.unshift(data);
	return {
		data: newData,
		message: 'Added!',
		mode: 'default',
		fdata: []
	};
}

function findReduce(state, action) {
	let f = action.find;
	let fdata = [];
	state.data.forEach((value) => {
		if(value.message.indexOf(f) >= 0) {
			fdata.push(value);
		}
	});
	return {
		data: state.data,
		message: 'find "' + f + '":',
		mode: 'find',
		fdata: []
	};
}

function deleteReduce(state, action) {
	//新しい配列を生成するReduxの特性のため
	let newData = state.data.slice();
	newData.slice(action.index, 1);
	return {
		data: 'delete"' + action.index + '":',
		message: 'delete',
		mode: 'delete',
		fdata: []
	}
}

export function addMemo(text) {
	return {
		type: 'ADD',
		message: text
	}
}

export function deleteMemo(num) {
	return {
		type: 'DELETE',
		message: num
	}
}

export function findMemo(text) {
	return {
		tyoe: 'FIND',
		find: text
	}
}

export default createStore(memoReducer);

