import React from 'react'

const commentsData = [
    {
        name: "User Name",
        comment:"explore features like user authentication. Gain valuable insights into creating",
        replies:[
            {
                name: "User Name",
                comment:"explore features like user authentication. Gain valuable insights into creating",
                replies:[],
            },
            {
                name: "User Name",
                comment:"explore features like user authentication. Gain valuable insights into creating",
                replies:[
                    {
                        name: "User Name",
                        comment:"explore features like user authentication. Gain valuable insights into creating",
                        replies:[],
                    },
                    {
                        name: "User Name",
                        comment:"explore features like user authentication. Gain valuable insights into creating",
                        replies:[
                            {
                                name: "User Name",
                                comment:"explore features like user authentication. Gain valuable insights into creating",
                                replies:[],
                            },
                            {
                                name: "User Name",
                                comment:"explore features like user authentication. Gain valuable insights into creating",
                                replies:[],
                            },
                        ],
                    },

                ],
            },
            {
                name: "User Name",
                comment:"explore features like user authentication. Gain valuable insights into creating",
                replies:[],
            },
            
        ],
    },
    {
        name: "User Name",
        comment:"explore features like user authentication. Gain valuable insights into creating",
        replies:[],
    },
    {
        name: "User Name",
        comment:"explore features like user authentication. Gain valuable insights into creating",
        replies:[
            {
                name: "User Name",
                comment:"explore features like user authentication. Gain valuable insights into creating",
                replies:[],
            },
            {
                name: "User Name",
                comment:"explore features like user authentication. Gain valuable insights into creating",
                replies:[
                    {
                        name: "User Name",
                        comment:"explore features like user authentication. Gain valuable insights into creating",
                        replies:[],
                    },
                    {
                        name: "User Name",
                        comment:"explore features like user authentication. Gain valuable insights into creating",
                        replies:[],
                    },
                ],
            },
            {
                name: "User Name",
                comment:"explore features like user authentication. Gain valuable insights into creating",
                replies:[],
            },
        ],
    },
    {
        name: "User Name",
        comment:"explore features like user authentication. Gain valuable insights into creating",
        replies:[],
    },
    {
        name: "User Name",
        comment:"explore features like user authentication. Gain valuable insights into creating",
        replies:[
            {
                name: "User Name",
                comment:"explore features like user authentication. Gain valuable insights into creating",
                replies:[
                    {
                        name: "User Name",
                        comment:"explore features like user authentication. Gain valuable insights into creating",
                        replies:[],
                    },
                    {
                        name: "User Name",
                        comment:"explore features like user authentication. Gain valuable insights into creating",
                        replies:[],
                    },
                ],
            },
        ],
    },
    {
        name: "User Name",
        comment:"explore features like user authentication. Gain valuable insights into creating",
        replies:[],
    },
    {
        name: "User Name",
        comment:"explore features like user authentication. Gain valuable insights into creating",
        replies:[],
    },

]

const Comment = ({data}) => {
    const { name, comment, replies} = data
  return (
    <div className='m-2 pr-3 py-2 flex bg-gray-50 rounded-lg w-[40rem] my-5'>
        <img className='h-12 pl-2 ' src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png" alt="user-icon" />

        <div className='pl-2'>
        <h3 className='font-bold'>{name}</h3>
        <p>{comment}</p>
        </div>

    </div>
  )
}

const CommentsList = ({comments}) => {
  return comments?.map((item, index) => (
    <div className='pl-4'> 
        <Comment key={index} data={item} />
        <div className='pl-5 border-white border-l-gray-500 ml-5 border'>
            <CommentsList comments={item.replies}/>
        </div>
    </div>
  
  ) )
}

export const CommentsContainer = () => {
    return(
        <div className='m-5 p-2'>
            <h1 className='text-2xl font-bold'>Comments</h1>
            <CommentsList comments={commentsData}/>
        </div>
    )
}

export default CommentsContainer