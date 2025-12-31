package com.urjasense.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class BillResponse {
    private double units;
    private String state;
    private double amount;
    private String currency;
}
