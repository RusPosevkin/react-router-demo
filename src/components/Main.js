import React from "react";
import Input from "./Input";
import Button from "./Button";
import Spinner from "./Spinner";
import Card from "./Card";
import "./Main.css";

function Main({ handleChange, isSubmitted, handleSubmit, cards, searchQuery }) {
  return (
    <div className="Main">
      <form className="Main-search" onSubmit={handleSubmit}>
        <Input
          placeholder="Search free high-resolution photos"
          value={searchQuery}
          handleChange={handleChange}
        />
        <Button title="Search" type="submit" />
      </form>
      <div className="Main-cards">
        {isSubmitted ? (
          <Spinner />
        ) : (
          cards.map((card) => <Card key={card.id} {...card} />)
        )}
      </div>
    </div>
  );
}

export default Main;
