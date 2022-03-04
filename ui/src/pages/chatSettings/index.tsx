import "./chatSettings.scss";
import React from "react";
import Header from "../../components/header";
import { Container, Form,Button } from "react-bootstrap";
import {  SelectOption } from "../../interfaces";
import Select from 'react-select';
import { useForm,Controller } from "react-hook-form";
import useCategory from "../../hooks/useCategory";
import axios from "axios";

const ChatSettings:React.FC = ():JSX.Element=>{
    const category = useCategory();
      const typeOptions:Array<SelectOption> = [
        { value: 'private', label: 'Private' },
        { value: 'protected', label: 'Protected' },
        { value: 'open', label: 'Open' }
      ];
      const { register, handleSubmit,formState: { errors },control } = useForm();
      const onSubmit = async(data:any) => {
            try{
                const dataNew = new FormData();
                dataNew.append("name",data.name);
                dataNew.append("type",data.type);
                dataNew.append("category",data.category);
                dataNew.append("description",data.description);
                dataNew.append("owner",data.owner);
                dataNew.append("dp",data.dp[0]);
                dataNew.append("icon",data.icon[0]);
                
                await axios.post("/api/chatroom/new",dataNew);
            }
            catch(e){
                alert("Falied to create new chat room")
            }
        };
    return(
        <>
            <Header/>
            <Container>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Chatroom Name</Form.Label>
                        <Form.Control {...register("name", { required: true })} type="text" placeholder="What's your room's name?" />
                        
                        {errors.name && <span>Chatroom name required</span>}
                       
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Type</Form.Label>
                        <Controller
                            rules={{ required: true }}
                                control={control}
                                defaultValue={""}
                                            name="type"
                                            render={({ field: { onChange, value, ref }}) => (
                                            <Select 
                                                ref={ref}
                                                value={typeOptions.filter(c => value.includes(c.value))}
                                                onChange={(val:any) => onChange(val.value)}
                                                options={typeOptions}
                                            />
                                            )}
                        />        
                    {errors.type && <span>Chatroom type required</span>}         
                </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control  {...register("description", { required: true })}  as="textarea" placeholder="What are you going to discuss here?" />
                        {errors.description && <span>Chatroom description required</span>}  
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Category</Form.Label>
                                <Form.Select defaultValue="choose" {...register("category", { required: true })}>
                                <option  disabled>choose</option>{
                                    category.map((item,key)=>(
                                        <option key={key} value={item}>{item}</option>
                                    ))
                                }
                                </Form.Select>
                        {errors.category && <span>Chatroom category required</span>}  
                               </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Icon</Form.Label>
                        <Form.Control  {...register("icon")}  accept="image/*" type="file" placeholder="Choose your chatroom icon" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Owner Name</Form.Label>
                        <Form.Control  {...register("owner", { required: true })}  type="text" placeholder="What's your name?" />
                        {errors.owner && <span>owner name required</span>}  
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Display picture</Form.Label>
                        <Form.Control  {...register("dp")}  accept="image/*" type="file" placeholder="Choose your profile picture" />

                    </Form.Group>
                    <Button type="submit" variant="primary">Launch chatroom</Button>
                </Form>
            </Container>
        </>
    );
}

export default ChatSettings;
/*                    */