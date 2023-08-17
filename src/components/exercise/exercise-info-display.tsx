"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible"

import { Exercises } from "@/types/exercise"

import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card"

interface Props {
  split_id: string
  exercises: Exercises[]
}

export default function ExerciseInfoDisplay({ split_id, exercises }: Props) {
  return (
    <>
      {exercises.length > 0 ? (
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {exercises.map((exercise, exerciseIndex) => (
            <Card key={exerciseIndex}>
              <CardHeader>
                <Link href={`/workouts/sets/${split_id}/${exercise.id}`}>
                  <CardTitle className="text-lg">{exercise.name}</CardTitle>
                  <div className="flex flex-row items-center space-x-1">
                    <CardTitle className="text-sm">Primary:</CardTitle>
                    {exercise.primary_muscles?.map((muscles, index) => (
                      <CardDescription key={index} className="capitalize">
                        {muscles}
                      </CardDescription>
                    ))}
                  </div>
                  {exercise.secondary_muscles &&
                    exercise.secondary_muscles.length > 0 && (
                      <div className="flex flex-row items-center space-x-1">
                        {/* Flex container */}
                        <CardTitle className="text-sm">Secondary: </CardTitle>
                        <CardDescription className="capitalize">
                          {exercise.secondary_muscles.join(", ")}
                        </CardDescription>
                      </div>
                    )}
                </Link>
              </CardHeader>
              <CardContent>
                <Link href={`/workouts/exercise_info/${exercise.id}`}>
                  <Button variant={"outline"}>More Info</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <CardHeader>
          <CardTitle>No exercises added!</CardTitle>
          <CardDescription>Please add exercises to split!</CardDescription>
        </CardHeader>
      )}
    </>
  )
}
