//  Write a function that reads a file asynchronously and returns its content.
const fs = require('fs')

function readFileAsync(filePath){
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if(err) reject(err)
            else resolve(data)
        })
    })
}

// Create a simple asynchronous function using Promises to simulate fetching data from an API.
function fetchData(){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve('data fetched successfully')
        }, 1000)
    })
}

// Implement a callback-based function to perform multiple asynchronous tasks in series.

function task1(callback){
    setTimeout(()=>{
        console.log("Task 1 completed successfully")
        callback()
    }, 1000)
}

function task2(callback){
    setTimeout(()=>{
        console.log("Task 2 completed successfully")
        callback()
    }, 1000)
}

task1(()=>{
    task2(()=>{
        console.log('all tasks completed.')
    })
})