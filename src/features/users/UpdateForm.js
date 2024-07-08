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
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from './userSlice';
import { useNavigate, useParams } from 'react-router';


const UpdateForm = () => {

  const nav = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userSlice);
  const { id } = useParams();
  const existUser = users.find((user) => user.id === id);

  // console.log(existUser);



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
      username: existUser.username,
      email: existUser.email,
      gender: existUser.gender,
      hobbies: existUser.hobbies,
      msg: existUser.msg,
      country: existUser.country,
      imageReview: existUser.imageReview,
      // image: null
    },
    onSubmit: (val) => {

      dispatch(updateUser({ ...val, id: existUser.id }))
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
                  checked={values.gender === rad.value}
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
                  checked={values.hobbies.includes(check.value)}
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
            <Select value={values.country} name='country' onChange={(e) => setFieldValue('country', e)} label="Select Country">
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

export default UpdateForm


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

