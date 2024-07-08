import React from 'react'

import {
  Card,
  Input,
  Button,
  Typography,
  Radio,
  Checkbox,
  Textarea,
  Select,
  Option,
} from "@material-tailwind/react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addUser } from './userSlice';
import { nanoid } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router';


const AddForm = () => {

  const nav = useNavigate();

  const dispatch = useDispatch();

  const userSchema = Yup.object({

    username: Yup.string().matches(/^([\w]{3,})+\s+([\w\s]{3,})+$/i, 'Invalid username').max(15, 'Must be 15 characters or less')
      .required('Username is required'),


    email: Yup.string().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Invalid email').required('Email is required'),

    hobbies: Yup.array().min(1).required(),

    image: Yup.mixed().test('fileType', 'invalid image', (e) => {
      const filesType = ["image/png", "image/jpg", "image/jpeg"]
      return filesType.includes(e.type)
    }).required()

  });

  const { handleChange, handleSubmit, values, setFieldValue, errors, touched } = useFormik({
    initialValues: {
      username: '',
      email: '',
      gender: '',
      hobbies: [],
      msg: '',
      country: '',
      imageReview: null,
      image: null
    },
    onSubmit: (val) => {

      const newUser = {
        username: val.username,
        email: val.email,
        gender: val.gender,
        hobbies: val.hobbies,
        msg: val.msg,
        country: val.country,
        imageReview: val.imageReview,
        id: nanoid()
      }

      // dispatch(addUser({ ...val, id: nanoid() }))
      dispatch(addUser(newUser));
      nav(-1);

      // console.log(val)
    },
    // validationSchema: userSchema

  });


  return (
    <div className='max-w-[400px] p-2' >
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Add Your Detail
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to post.
        </Typography>

        <form onSubmit={handleSubmit} className="mt-8 mb-2 space-y-6">
          <div>
            <Input
              error={errors.username && touched.username}
              name='username'
              onChange={handleChange}
              value={values.username}
              label="Username" />
            {errors.username && touched.username && <p className='text-red-600'>{errors.username}</p>}
          </div>


          <div>
            <Input
              name='email'
              onChange={handleChange}
              value={values.email}
              label="Email" />
            {errors.email && touched.email && <p className='text-red-600'>{errors.email}</p>}
          </div>

          <div>
            <h1>Select Your Gender</h1>
            <div className="flex gap-10">
              {radData.map((rad, i) => {
                return <Radio
                  key={i}
                  name='gender'
                  onChange={handleChange}
                  label={rad.label}
                  value={rad.value}
                  color={rad.color}
                />

              })}

            </div>
          </div>

          <div>
            <h1>Select Your Hobby</h1>

            <div className="flex w-max gap-4">
              {checkData.map((check, i) => {
                return <Checkbox
                  name='hobbies'
                  key={i}
                  onChange={handleChange}
                  label={check.label}
                  value={check.value}
                  color={check.color}
                />
              })}

            </div>
            {errors.hobbies && touched.hobbies && <p className='text-red-600'>{errors.hobbies}</p>}
          </div>


          <div className="w-72">
            <Select name='country' onChange={(e) => setFieldValue('country', e)} label="Select Country">
              <Option value='nepal'>Nepal</Option>
              <Option value='india'>India</Option>
              <Option value='china'>China</Option>

            </Select>
          </div>

          <div className="w-96">
            <Textarea
              name='msg'
              onChange={handleChange}
              value={values.msg}
              label="Message"
            />
          </div>


          <div className='w-96'>
            <h1>Please Select an Image</h1>
            <Input
              name='image'
              onChange={(e) => {
                // console.log(e.target.files);
                const file = e.target.files[0];
                // setFieldValue('image', file)
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.addEventListener('load', (e) => {
                  setFieldValue('imageReview', e.target.result);
                })
                setFieldValue('image', file);
              }}
              type='file'
            />
            {values.imageReview && <img src={values.imageReview} alt="" />}

            {errors.image && touched.image && <p className='text-red-600'>{errors.image}</p>}


          </div>

          <Button type='submit' className="mt-6" fullWidth>
            Submit
          </Button>

        </form>
      </Card>
    </div>
  )
}

export default AddForm


const radData = [
  {
    label: 'Male',
    color: 'blue',
    value: 'male'

  },
  {
    label: 'Female',
    color: 'pink',
    value: 'female'

  }
];

const checkData = [
  {
    label: 'Dance',
    color: 'yellow',
    value: 'dance'

  },
  {
    label: 'Sing',
    color: 'green',
    value: 'sing'

  },
  {
    label: 'Swim',
    color: 'purple',
    value: 'swim'

  }
];

