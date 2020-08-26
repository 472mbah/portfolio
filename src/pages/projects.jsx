import React, { Component } from 'react';
import Card from '../components/card';
import style from './index.module.css';

class Projects extends Component {
    
    state = {
        data : [
            // {
            //     link:'472mbah.github.io/calculate_time_of_death', 
            //     title:'Life expectancy analysis', 
            //     description:'A linear regression model designed to determine the life expectancy based on several factors.',
            //     main_language:'Python',
            //     tags:['Data_science'],
            //     read_time:'5 min read',
            // },
            // {
            //     link:'472mbah.github.io/titanic', 
            //     title:'Model to predict chance of survival on titanic', 
            //     description:'A linear regression model designed to determine the life expectancy based on several factors.',
            //     main_language:'Python',
            //     tags:['Data_science', 'Web_dev'],
            //     read_time:'12 min read',
            // },            
            // {
            //     link:'472mbah.github.io/prem_who_wins', 
            //     title:'Premier league winners vs Losers', 
            //     description:'A classification model designed to determine the result between two premier league teams. ',
            //     main_language:'Python',
            //     tags:['Data_science', 'Web_dev'],
            //     read_time:'11 min read',
            // },
            {
                link:'github.com/472mbah/binary_tree', 
                title:'Binary search tree [Course work]', 
                description:'Recursive binary tree algorithm to find an entity based on 3 descriptions',
                main_language:'Java',
                tags:['Algorithms', 'Recursion'],
                read_time:null,
            },             
            {
                link:'472mbah.github.io/chat337v2', 
                title:'Chat337_v2', 
                description:'Chat application made using Socket.io, Express, Repl.it, MongoDB and React.',
                main_language:'Javascript',
                tags:['API', 'Web_dev', 'Database'],
                read_time:null,
            },            
            // {
            //     link:'472mbah.github.io/covid-19-tracker', 
            //     title:'Coronavirus status tracker [Learned from]', 
            //     description:'Data fetched from an API to show a comprehensive view of the status of the pandemic. ',
            //     main_language:'Javascript',
            //     tags:['API', 'Web_dev'],
            //     read_time:null,
            //     color:'#76EA3F',
            // },
            {
                link:'472mbah.github.io/a_star/', 
                title:'A* algorithm implementation', 
                description:'Implementation of the A* algorithm with visualized path.',
                main_language:'Javascript',
                tags:['API', 'Web_dev'],
                read_time:null,
            },
            // {
            //     link:'472mbah.github.io/chat337', 
            //     title:'Chat 337', 
            //     description:'Chat application made using Socket.io',
            //     main_language:'Javascript',
            //     tags:['API', 'Web_dev'],
            //     read_time:null,
            //     color:'#76EA3F'
            // },
            //https://472mbah.github.io/matrix/
            {
                link:'github.com/472mbah/String-Permutation/', 
                title:'String permutation algorithm', 
                description:'A recursive algorithm to determine all the possible combinations of a string.',
                main_language:'Node',
                tags:['Algorithms', 'Recursion'],
                read_time:null,
            },  
            {
                link:'472mbah.github.io/matrix/', 
                title:'Matrix calculator', 
                description:'Perform arithmetic of matrices.',
                main_language:'Javascript',
                tags:['Web_dev'],
                read_time:null,
            },            
                                 

        ]
    }
    
    render(){

        const { data } = this.state;
        const { mobile } = this.props;

        return(
          <div>
              <div className={mobile? style.grid_mobile:style.grid}>
                {
                    data.map((project, i)=>
                        <div key={i}><Card data={project}/></div> 
                    )
                }
              </div>


          </div>
        )
    }
}

export default Projects;
