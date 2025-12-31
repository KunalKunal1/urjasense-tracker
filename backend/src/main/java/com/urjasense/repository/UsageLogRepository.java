package com.urjasense.repository;

import com.urjasense.model.UsageLog;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.time.LocalDateTime;
import java.util.List;

public interface UsageLogRepository extends MongoRepository<UsageLog, String> {
    List<UsageLog> findByUserIdAndTimestampBetween(String userId, LocalDateTime start, LocalDateTime end);
    List<UsageLog> findByUserId(String userId);
}
