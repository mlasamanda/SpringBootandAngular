package com.crude.SpringCrude.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "employee")
public class Employee {
    @Id
    @Column(name = "id",length = 25)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column(name = "fname",length = 255)
    private String fname;
    @Column(name = "lname",length = 255)
    private String lname;
    @Column(name = "email",length = 255)
    private  String email;
    @Column(name = "password",length = 255)
    private String password;
    @Column(name = "salary",length = 255)
    private int salary;
    @Column(name = "mobile",length = 255)
    private int mobile;

    public Employee(int id, String fname, String lname, String email,
                    String password, int salary, int mobile) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.password = password;
        this.salary = salary;
        this.mobile = mobile;
    }

    public Employee() {
    }

    public Employee(String fname, String lname, String email,
                    String password, int salary, int mobile) {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getSalary() {
        return salary;
    }

    public void setSalary(int salary) {
        this.salary = salary;
    }

    public int getMobile() {
        return mobile;
    }

    public void setMobile(int mobile) {
        this.mobile = mobile;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", fname='" + fname + '\'' +
                ", lname='" + lname + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", salary=" + salary +
                ", mobile=" + mobile +
                '}';
    }
}
