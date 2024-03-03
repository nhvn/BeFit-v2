create table
  users (id text primary key);

create table
  customers (
    id text primary key,
    stripe_customer_id text,
    constraint fk_customers_users foreign key (id) references users (id)
  );

create table
  exercise (
    id text primary key,
    created_at text,
    exercise_id text,
    split_ids text[],
    updated_at text,
    user_id text
  );

CREATE TABLE exercises (
    id VARCHAR(255) PRIMARY KEY,
    category VARCHAR(255) NOT NULL,
    date_created TIMESTAMP NOT NULL,
    equipment VARCHAR(255),
    force VARCHAR(255),
    images VARCHAR[],
    instructions VARCHAR[],
    level VARCHAR(255) NOT NULL,
    mechanic VARCHAR(255),
    name VARCHAR(255) NOT NULL,
    primary_muscles VARCHAR[],
    secondary_muscles VARCHAR[]
);

CREATE TABLE prices (
    id VARCHAR(255) PRIMARY KEY,
    active BOOLEAN,
    currency VARCHAR(255),
    description VARCHAR(255),
    interval VARCHAR(255),
    interval_count INTEGER,
    metadata JSONB,
    product_id VARCHAR(255),
    trial_period_days INTEGER,
    type VARCHAR(255),
    unit_amount INTEGER
);

CREATE TABLE products (
    id VARCHAR(255) PRIMARY KEY,
    active BOOLEAN,
    description VARCHAR(255),
    image VARCHAR(255),
    metadata JSONB,
    name VARCHAR(255)
);

CREATE TABLE profiles (
    id VARCHAR(255) PRIMARY KEY,
    avatar_url VARCHAR(255),
    bio TEXT,
    full_name VARCHAR(255),
    updated_at TIMESTAMP,
    username VARCHAR(255),
    website VARCHAR(255)
);

CREATE TABLE split (
    id VARCHAR(255) PRIMARY KEY,
    created_at TIMESTAMP,
    muscle_targets VARCHAR[],
    name VARCHAR(255),
    split_group_id VARCHAR(255),
    user_id VARCHAR(255)
);

CREATE TABLE split_group (
    id VARCHAR(255) PRIMARY KEY,
    created_at TIMESTAMP,
    name VARCHAR(255),
    user_id VARCHAR(255)
);

CREATE TABLE subscriptions (
    id VARCHAR(255) PRIMARY KEY,
    cancel_at TIMESTAMP,
    cancel_at_period_end BOOLEAN,
    canceled_at TIMESTAMP,
    created TIMESTAMP,
    current_period_end TIMESTAMP,
    current_period_start TIMESTAMP,
    ended_at TIMESTAMP,
    metadata JSONB,
    price_id VARCHAR(255),
    quantity INTEGER,
    status VARCHAR(255),
    trial_end TIMESTAMP,
    trial_start TIMESTAMP,
    user_id VARCHAR(255)
);

CREATE TABLE weight (
    id VARCHAR(255) PRIMARY KEY,
    created_at TIMESTAMP,
    description VARCHAR(255),
    user_id VARCHAR(255),
    weight INTEGER,
    weight_url VARCHAR(255)
);

CREATE TABLE workout_sets (
    id VARCHAR(255) PRIMARY KEY,
    created_at TIMESTAMP NOT NULL,
    exercise_id VARCHAR(255),
    reps INTEGER,
    user_id VARCHAR(255),
    weight INTEGER
);

-- Add foreign key constraints if needed
ALTER TABLE prices ADD CONSTRAINT fk_prices_product_id FOREIGN KEY (product_id) REFERENCES products(id);
ALTER TABLE subscriptions ADD CONSTRAINT fk_subscriptions_price_id FOREIGN KEY (price_id) REFERENCES prices(id);
ALTER TABLE subscriptions ADD CONSTRAINT fk_subscriptions_user_id FOREIGN KEY (user_id) REFERENCES profiles(id);
