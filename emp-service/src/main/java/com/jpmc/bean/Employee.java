package com.jpmc.bean;

import jakarta.persistence.*;

@Table(name = "empTab")
@Entity
public class Employee {
    @Id
    @GeneratedValue(generator = "myGen",strategy = GenerationType.AUTO)
    private Integer empID;
    @Column
    private String empName;
    @Column
    private String email;
    @Column
    private Long contact;

    public Integer getEmpID() {
        return empID;
    }

    public void setEmpID(Integer empID) {
        this.empID = empID;
    }

    public String getEmpName() {
        return empName;
    }

    public void setEmpName(String empName) {
        this.empName = empName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getContact() {
        return contact;
    }

    public void setContact(Long contact) {
        this.contact = contact;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "empID=" + empID +
                ", empName='" + empName + '\'' +
                ", email='" + email + '\'' +
                ", contact=" + contact +
                '}';
    }
}
