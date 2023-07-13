export const userColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img ||  "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  },
  {
    field: "isAdmin",
    headerName: "Admin",
    width: 100,
  }
  
];

//temporary data
export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
];

export const roomColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 200,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 100,
  },
  {
    field: "roomNumbers",
    headerName: "Room:RoomId",
    width: 500,
   
    renderCell: (params) => (
      <ul className="flex">
        {params.value.map((a, index) => (
          <li key={index}>{a.number}:{a._id} ,<ul className="flex"><li key={index}>{a.unavailableDates}</li></ul></li>
          

        ))}
      </ul>
    ),
    type:'string',
  },
  
  
  
  
];
export const contactColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "ph",
    headerName: "Phone",
    width: 100,
  }
  
  
];
export const confirmbColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  
  {
    field: "bid",
    headerName: "Bookind Id",
    width: 230,
  },

  {
    field: "sdate",
    headerName: "From Date",
    width: 150,
  },
  {
    field: "edate",
    headerName: "To Date",
    width: 150,
  },{
    field: "un",
    headerName: "User Name",
    width: 150,
  },{
    field: "ue",
    headerName: "Email",
    width: 150,
  },{
    field: "rn",
    headerName: "Room Numbers,Title",
    width: 150,
  }
  ,{
    field: "hn",
    headerName: "Hotel Name",
    width: 150,
  }
  
  
];
export const allroomColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },

  {
    field: "price",
    headerName: "Price",
    width: 150,
  },
  {
    field: "maxPeople",
    headerName: "Max People Allowed",
    width: 150,
  },{
    field: "desc",
    headerName: "Description",
    width: 150,
  },{
    field: "roomNumbers",
    headerName: "Rooms",
    width: 150,
  }
  
  
];