import {Button,Grid, Input, Typography} from "@mui/material";
const UserForm = props=>{
    return(
        <Grid
        container
        spacing={2}
        sx={{
            backgroundColor:'#ffffff',
            marginBottom:'30px',
            display:'block',
        }}
    >
        <Grid>
            <Typography component={'h1'} sx={{ color:'#000000',marginTop:'20px'}}>User Form</Typography>

        </Grid>

        <Grid item xs={12} sm={6} sx={{display:'flex'}}>
            <Typography 
            component={'label'}
            htmlFor="id"
            sx={{
                color:'#000000',
                marginRight:'20px',
                fontSize:'16px',
                width:'100px',
                display:'block',
            }}>
                ID
            </Typography>   
            <Input 
                 type="number"
                 id='id'
                 name="id"
                 sx={{
                    width:'400px'
                 }}
                 value={''}
                 onchange={e=>{}}/>
        </Grid>

        <Grid item xs={12} sm={6} sx={{display:'flex'}}>
            <Typography 
            component={'label'}
            htmlFor="id"
            sx={{
                color:'#000000',
                marginRight:'20px',
                fontSize:'16px',
                width:'100px',
                display:'block',
            }}>
                Name
            </Typography>   
            <Input 
                 type="text"
                 id='name'
                 name="name"
                 sx={{
                    width:'400px'
                 }}
                 value={''}
                 onchange={e=>{}}/>
        </Grid>
        <button
        sx={{
            margin:'auto',
            marginBottom:'20px',
            backgroundColor:'#00c6e6',
            color:'#000000',
            marginLeft:'15px',
            marginTop:'20px',
            '&:hover':{
                opacity:'0.7',
                backgroundColor:'#00c6e6',

            }

        }}>
            ADD
        </button>
        
    </Grid>
    );


}

export default UserForm;