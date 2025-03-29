"use client";

import ProductList from "@/components/ProductList";
import { Button} from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [category, setCategory] = useState('');

  return (
    <div>
    <h1>Cloud Drive</h1>
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Clothing">Clothing</SelectItem>
        <SelectItem value="Household">Household</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
    <select className="w-[180px]" onChange={(e) => setCategory(e.target.value)}>
      <option value="">Select a category</option>
      <option value="Clothing">Clothing</option>
      <option value="Household">Household</option>
      <option value="system">System</option>
    </select>

    <ProductList category={category} />
    </div>
  );
}
