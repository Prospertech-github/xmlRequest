// setTimeout(() => {
// 	console.log('1 second passed');
// 	setTimeout(() => {
// 		console.log('2 seconds passed');
// 		setTimeout(() => {
// 			console.log('3 second passed');
// 			setTimeout(() => {
// 				console.log('4 second passed');
// 			}, 1000);
// 		}, 1000);
// 	}, 1000);
// }, 1000);

// setTimeout(() => {
//   console.log('1 second passed')
//   setTimeout(() => {
//     console.log('2 seconds passed')
//     setTimeout(() => {
//       console.log('3 seconds passed')
//     }, 1000)
//   }, 1000)
// },1000)


// console.log('We are waiting for this setTimeout function');


// const lotteryPromise = new Promise(function (resolve, reject) {
// 	console.log('Lotter draw is happening 🔮');
// 	setTimeout(function () {
// 		if (Math.random() >= 0.5) {
// 			resolve('You WIN 💰');
// 		} else {
// 			reject(new Error('You lost your money 💩'));
// 		}
// 	}, 2000);
// });

// const lotteryGame = new Promise((resolve, reject) => {
//   console.log('Baba dey spin wheel');
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
// 			resolve('You WIN 💰');
// 		} else {
// 			reject(new Error('You lost your money 💩'));
// 		}
//   }, 2000)
// })

// lotteryGame.then(res => console.log(res)).catch(console.log(err => console.log(err)));

// setTimeout(() => {
//   console.log('1 second passed')
//   setTimeout(() => {
//     console.log('2 seconds passed')
//     setTimeout(() => {
//       console.log('3 seconds passed')
//     }, 1000)
//   }, 1000)
// },1000)

// PROMISIFY SETTIMEOUT FUNCTION
const wait = function (seconds) {
	return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
	});
};

wait(1).then(() => {
  console.log('1 second has passed');
  return wait(1);
}).then(() => {
  console.log('2 seconds has passed')
  return wait(1);
}).then(() => {
  console.log('3 seconds has passed')
})



// wait(1)
// 	.then(() => {
// 		console.log('1 second passed');
// 		return wait(1);
// 	})
// 	.then(() => {
// 		console.log('2 second passed');
// 		return wait(1);
// 	})
// 	.then(() => {
// 		console.log('3 second passed');
// 		return wait(1);
// 	})
// 	.then(() => console.log('4 second passed'));




// TRY AND CATCH ERROR HANDLING
// let a = 5;
// let b = '5'
// try {
// 	setTimeout(() => {
// 	  console.log('1 second passed')
// 	  setTimeout(() => {
// 	    console.log('2 seconds passed')
// 	    setTimeout(() => {
// 	      console.log('3 seconds passed')
// 	    }, 1000)
// 	  }, 1000)
// 	},1000)
// } catch (error) {
//   console.log(error)
// }