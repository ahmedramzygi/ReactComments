import React from'react'
import ReactDOM from'react-dom'
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard'

const App=()=>{
    return (
        <div className="ui container comments">
            <ApprovalCard> 
                <CommentDetail 
                author="Ahmed" 
                time="1.30 AM" 
                comment="IT is a very good shoes"
                image={faker.image.avatar()}
                />
            </ApprovalCard>
           
             
            <ApprovalCard> 
            <CommentDetail author="Moda" time="10.30 PM" comment="I bought it 2 years ago"image={faker.image.avatar()} />
            </ApprovalCard> 

            <ApprovalCard>     
            <CommentDetail author="Zoba" time="9.01 AM" comment="It looks the same as the original one" image={faker.image.avatar()}/>
            </ApprovalCard> 

             
        </div>

    );
};

ReactDOM.render(<App />,document.querySelector('#root'))