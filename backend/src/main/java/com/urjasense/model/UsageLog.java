package com.urjasense.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;

@Data
@Document(collection = "usage_logs")
public class UsageLog {
    @Id
    private String id;
    private String userId;
    private LocalDateTime timestamp;
    private double powerKw;
    private double voltage;
    private String source;
    private String state;
}
