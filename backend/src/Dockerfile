# Start from an official Java runtime as a parent image
FROM openjdk:17-jdk-alpine

# Set the working directory in the container
WORKDIR /app

# Copy Maven files and source code
COPY backend/pom.xml backend/
COPY backend/src backend/src

# Build the Spring Boot application
RUN cd backend && mvn clean install -DskipTests

# Run the Spring Boot app
CMD ["java", "-jar", "backend/target/backend-0.0.1-SNAPSHOT.jar"]