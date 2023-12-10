"use client"
import React from 'react'
import { Card, CardDescription , CardTitle , CardHeader } from './ui/card'

const blogCard = ({title , description}) => {
  return (
    <div>
       <Card className="bg-gray-900 text-white p-10 mr-10 mb-10  ">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
           {description}
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}

export default blogCard
