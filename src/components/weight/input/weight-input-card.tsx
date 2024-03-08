"use client"

import React from "react"

import { Weight } from "@/types/weight"
import { formatCreatedAt } from "@/lib/format-date"
// import { formatDate } from "@/lib/format-date2"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { WeightDialog } from "./weight-dialog"

interface Props {
  user_id: string
  weight: Weight
}

// FIX CREATEDAT
export const WeightInputCard = ({ user_id, weight }: Props) => {
  const { date: today } = formatCreatedAt(new Date())
  const mostRecentDate = weight?.created_at
    ? formatCreatedAt(weight.created_at).date
    : null

  const isToday = today === mostRecentDate

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Last Updated Weight
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {isToday ? (
              <>
                <h1>{weight.weight} lbs</h1>
                {/* later make this more dynamic */}
                <p className="text-xs text-muted-foreground">
                  -20.1% from last month
                </p>
              </>
            ) : (
              <>
                <h1 className="text-red-300">- - - lbs</h1>
                <p className="text-xs text-muted-foreground">
                  Please add today&apos;s weight
                </p>
              </>
            )}
          </div>
        </CardContent>
        <CardFooter>
          {/* Turned off box disappearing so users can make many inputs. */}
          <WeightDialog user_id={user_id} /> 
        </CardFooter>
      </Card>
    </>
  )
}
