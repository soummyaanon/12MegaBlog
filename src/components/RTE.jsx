import React from 'react'
import {Editor } from '@tinymce/tinymce-react';
import {Controller } from 'react-hook-form';


export default function RTE({name, control, label, defaultValue =""}) {
  return (
    <div className='w-full'> 
    {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

    <Controller
    name={name || "content"}
    control={control}
    render={({field: {onChange}}) => (
        <Editor
        initialValue={defaultValue}
        apiKey='cysay5ixt00oadcte5n5u68cfgd0wdn7ta5fdg3aic26mvzl'
        init={{
    height: 500,
    menubar: true,
    plugins: [
      "advlist",
      "autolink",
      "lists",
      "link",
      "image",
      "charmap",
      "preview",
      "anchor",
      "searchreplace",
      "visualblocks",
      "code",
      "fullscreen",
      "insertdatetime",
      "media",
      "table",
      "help",
      "tinymce_cloud_usage"
    ],
    toolbar:
      "undo redo | formatselect | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
    content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
    tinymce_cloud_usage: false
  }}
        onEditorChange={onChange}
        />
    )}
    />

     </div>
  )
}